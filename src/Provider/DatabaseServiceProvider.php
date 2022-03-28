<?php

namespace Flamarkt\Backoffice\Provider;

use Flamarkt\Backoffice\Database\AugmentedMigrator;
use Flarum\Database\Migrator;
use Flarum\Extension\Command\ToggleExtensionHandler;
use Flarum\Extension\ExtensionManager;
use Flarum\Foundation\AbstractServiceProvider;

class DatabaseServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        // This will only override the usage in ExtensionManager, but not during Flarum installation since those calls don't use the container
        // This will be fine as long as Flamarkt is not added to the auto-enabled extension list during installation
        $this->container->bind(Migrator::class, AugmentedMigrator::class);

        $this->container->beforeResolving(ToggleExtensionHandler::class, function () {
            // The ExtensionManager holds a copy of the migrator from even before any extension loads
            // We need to clear that binding, so it can be resolved again before an extension is enabled
            // Doing it every time the app boots would impact performance
            // This callback handles when migrations are being migrated through the API
            $this->container->forgetInstance(ExtensionManager::class);
        });

        // This handles MigrateCommand where Migrator is first and ExtensionManager second
        $this->container->afterResolving(Migrator::class, function () {
            $this->container->forgetInstance(ExtensionManager::class);
        });
    }
}

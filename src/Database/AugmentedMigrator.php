<?php

namespace Flamarkt\Backoffice\Database;

use Flarum\Database\Migrator;

/**
 * Extend Flarum's original Migrator to add a `when` callback key to migrations.
 * "up" migrations will be skipped if that callback return a falsy value.
 * "down" migrations will always run every time.
 */
class AugmentedMigrator extends Migrator
{
    protected function runUp($path, $file, \Flarum\Extension\Extension $extension = null)
    {
        $migration = $this->resolve($path, $file);

        if (is_array($migration) && array_key_exists('when', $migration)) {
            if (!call_user_func($migration['when'], $this->connection->getSchemaBuilder())) {
                $this->note("<info>Skipped:</info> $file");

                return;
            }
        }

        $this->runClosureMigration($migration);

        // Once we have run a migrations class, we will log that it was run in this
        // repository so that we don't try to run it next time we do a migration
        // in the application. A migration repository keeps the migrate order.
        $this->repository->log($file, $extension ? $extension->getId() : null);

        $this->note("<info>Migrated:</info> $file");
    }
}

# Backoffice

An alternative admin panel frontend for extensions.

Things this extension provides:

- `composer.json` parameters:
  - `extra.flamarkt-backoffice.settingsInBackoffice`: whether to redirect admin to backoffice for settings
  - `extra.flamarkt-backoffice.showInBackoffice`: whether to show extension in the extension list of backoffice
  - `extra.flamarkt-backoffice.hideFromAdmin`: whether to hide extension from admin list of extensions
- Global `backoffice` gate to configure base access to the backoffice.
- Patch for https://github.com/flarum/framework/issues/2876 (now fixed).
- Verbatim relationships.
- `common/utils/KeyboardNavigatable`: same as Flarum but exported.
- `common/states/AbstractListState`: an alternative to Flarum's [PaginatedListState](https://github.com/flarum/framework/blob/main/framework/core/js/src/common/states/PaginatedListState.ts).
- `common/pages/AbstractShowPage`: a re-usable page component with pre-build logic for loading single models
- `common/components/AbstractRelationshipSelect`: re-usable select input.
- `common/components/AbstractSortDropdown`: re-usable component to create sort dropdowns.
- `common/components/ActiveLinkButton`: alternative to Flarum's `LinkButton` with ability to configure which routes will make the button `active` state.
- `common/components/Sortable`: a Mithril implementation of a re-orderable list.
- `common/components/SortableHandle`: to be used with `Sortable`.
- `common/components/UserRelationshipSelect`: implementation of `AbstractRelationshipSelect` for user model.
- `backoffice/app`: the app object reference for `backoffice` frontend.
- `backoffice/states/UserListState`
- `backoffice/resolvers/ExtensionPageResolver`: same as Flarum but exported.
- `backoffice/pages/DashboardPage`
- `backoffice/pages/UserIndexPage`
- `backoffice/pages/UserShowPage`
- `backoffice/components/AbstractList`: re-usable component for index pages in backoffice.
- `backoffice/components/BackofficeNav`: same usage as Flarum's `AdminNav`.
- `backoffice/components/HeaderPrimary`: same usage as Flarum's `HeaderPrimary`.
- `backoffice/components/HeaderSecondary`: same usage as Flarum's `HeaderSecondary`.
- `backoffice/components/PermanentDeleteButton`: re-usable button with built-in API request.
- `backoffice/components/SoftDeleteButton`: re-usable delete/restore button with built-in API request.
- `backoffice/components/SubmitButton`: re-usable button with built-in translations.
- `backoffice/components/UserList`: implementation of `AbstractList` for `UserIndexPage`.
- `backoffice/components/UserSortDropdown`: implementation of `AbstractSortDropdown` for user model.
- Optional migrations through `when` callback in migration definition.

To compile the new frontend and import the classes, you'll need to update your `webpack.config.js`.
See other Flamarkt extensions for an example.

Note: because exports use the package name followed by the frontend name, `backoffice` is repeated in some exports, for example: `import 'flamarkt/backoffice/backoffice/app';`.

This package is implemented as an extension because it's the most reliable way to make sure all the logic runs only once and before any of the extensions that will use it.

More documentation will be published once out of beta.

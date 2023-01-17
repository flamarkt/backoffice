import app from './app';
import AbstractList from './components/AbstractList';
import BackofficeNav from './components/BackofficeNav';
import HeaderPrimary from './components/HeaderPrimary';
import HeaderSecondary from './components/HeaderSecondary';
import PermanentDeleteButton from './components/PermanentDeleteButton';
import RichTextInput from './components/RichTextInput';
import SearchInput from './components/SearchInput';
import SoftDeleteButton from './components/SoftDeleteButton';
import SubmitButton from './components/SubmitButton';
import UserList from './components/UserList';
import UserSortDropdown from './components/UserSortDropdown';
import DashboardPage from './pages/DashboardPage';
import UserIndexPage from './pages/UserIndexPage';
import UserShowPage from './pages/UserShowPage';
import ExtensionPageResolver from './resolvers/ExtensionPageResolver';
import UserListState from './states/UserListState';

export const backoffice = {
    'app': app,
    'components/AbstractList': AbstractList,
    'components/BackofficeNav': BackofficeNav,
    'components/HeaderPrimary': HeaderPrimary,
    'components/HeaderSecondary': HeaderSecondary,
    'components/PermanentDeleteButton': PermanentDeleteButton,
    'components/RichTextInput': RichTextInput,
    'components/SearchInput': SearchInput,
    'components/SoftDeleteButton': SoftDeleteButton,
    'components/SubmitButton': SubmitButton,
    'components/UserList': UserList,
    'components/UserSortDropdown': UserSortDropdown,
    'pages/DashboardPage': DashboardPage,
    'pages/UserIndexPage': UserIndexPage,
    'pages/UserShowPage': UserShowPage,
    'resolvers/UserListState': ExtensionPageResolver,
    'states/UserListState': UserListState,
}

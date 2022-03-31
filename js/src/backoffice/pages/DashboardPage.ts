import Page from 'flarum/common/components/Page';
import LinkButton from 'flarum/common/components/LinkButton';

export default class DashboardPage extends Page {
    view() {
        return m('.DashboardPage', m('.container', m('.DashboardWip', [
            m('h1', 'Flamarkt Backoffice'),
            m('p', 'This special admin panel gives extensions a new place for moderation tools.'),
            m('p', 'It\'s still a work in progress. This space will accept widgets just like Flarum\'s admin in a future version.'),
            LinkButton.component({
                className: 'Button',
                href: 'https://github.com/flamarkt/backoffice',
                external: true,
            }, 'Learn more on GitHub'),
        ])));
    }
}

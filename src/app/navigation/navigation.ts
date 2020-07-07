import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id       : 'artist',
    title    : 'Artist',
    translate: 'NAV.ARTIST',
    type     : 'group',
    icon     : 'apps',
    children : [
        {
            id       : 'information',
            title    : 'Information',
            translate: 'NAV.INFORMATION',
            type     : 'item',
            icon     : 'info',
            url      : '/apps/dashboards/project'
        },
        {
            id       : 'team',
            title    : 'Team',
            translate: 'NAV.TEAM',
            type     : 'item',
            icon     : 'group_work',
            url      : '/ui/page-layouts/blank'
        },
        {
            id       : 'release',
            title    : 'Releace',
            translate: 'NAV.RELEACE',
            type     : 'item',
            icon     : 'library_music',
            url      : '/ui/page-layouts/blank'
        },
        {
            id       : 'video',
            title    : 'Video',
            translate: 'NAV.VIDEO',
            type     : 'item',
            icon     : 'ondemand_video',
            url      : '/ui/page-layouts/blank'
        },
        {
            id       : 'concert',
            title    : 'Concert',
            translate: 'NAV.CONCERT',
            type     : 'item',
            icon     : 'confirmation_number',
            url      : '/ui/page-layouts/blank'
        }
      ]
  },
  {
    id       : 'service',
    title    : 'Service',
    translate: 'NAV.SERVICE',
    type     : 'group',
    icon     : 'apps',
    children : [
        {
            id       : 'analytics',
            title    : 'Analytics',
            translate: 'NAV.ANALYTICS',
            type     : 'item',
            icon     : 'network_check',
            url      : '/apps/dashboards/analytics'
        },
        {
            id       : 'organaizer',
            title    : 'Organaizer',
            translate: 'NAV.ORGANAIZER',
            type     : 'item',
            icon     : 'calendar_today',
            url      : '/apps/calendar'
        },
        {
            id       : 'producer',
            title    : 'Producer',
            translate: 'NAV.PRODUCER',
            type     : 'item',
            icon     : 'assignment_turned_in',
            url      : '/apps/academy/courses'
        },
        {
            id       : 'promotion',
            title    : 'Promotion',
            translate: 'NAV.PROMOTION',
            type     : 'item',
            icon     : 'star',
            url      : '/ui/page-layouts/blank'
        },
        {
            id       : 'marketing',
            title    : 'Marketing',
            translate: 'NAV.MARKETING',
            type     : 'item',
            icon     : 'perm_device_information',
            url      : '/ui/page-layouts/blank'
        },
        {
            id       : 'contact',
            title    : 'Contact',
            translate: 'NAV.CONTACT',
            type     : 'item',
            icon     : 'contacts',
            url      : '/apps/contacts'
        }
      ]
  },
  {
    id       : 'pages',
    title    : 'Pages',
    translate: 'NAV.PAGES',
    type     : 'group',
    icon     : 'apps',
    children : [
        {
            id       : 'faq',
            title    : 'FAQ',
            translate: 'NAV.FAQ',
            type     : 'item',
            icon     : 'question_answer',
            url      : '/pages/faq'
        },
        {
            id       : '404',
            title    : '404',
            translate: 'NAV.404',
            type     : 'item',
            icon     : 'error',
            url      : '/pages/errors/error-404'
        }
      ]
  }
];

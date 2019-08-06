'use strict';
const periodic = require('periodicjs');
const CONSTANTS = require('../../utilities/views/constants');
const styles = CONSTANTS.styles;
const THEMESETTINGS = periodic.settings.container[ 'decision-engine-service-container' ];

let four_oh_four_layout = {
  'component': 'Section',
  'props': {
    style: {
      backgroundColor: styles.application.background,
      height: '100%',
    },
  },
  'children': [
    {
      'component': 'Container',
      'props': {
        'hasTextCentered': true,
        'style': {
          marginTop: 120,
          marginBottom: 120,
          paddingLeft: '15%',
          paddingRight: '15%',
        },
      },
      'children': [{
        'component': 'div',
        'props': {},
        'children': [{
          'component': 'Title',
          'props': {
            'size': 'is3',
            'style': {
              'fontWeight': 'normal',
              'color': styles.colors.darkGreyText,
            },
          },
          'children': '404 Error',
        },
        {
          'component': 'hr',
          'props': {
            'style': {
              'opacity': '0.25',
              'margin': '1.5rem 0',
            },
          },
        },
        {
          'component': 'Subtitle',
          'props': {
            'size': 'is5',
            'style': {
              'margin': '1.5rem 0',
              'fontWeight': 'normal',
              'color': styles.colors.darkGreyText,
            },
          },
          'children': 'The page cannot be found',
        },
        {
          'component': 'Subtitle',
          'props': {
            'size': 'is6',
            'style': {
              'lineHeight': '1.5',
              'fontWeight': 'normal',
              'color': styles.colors.darkGreyText,
            },
          },
          children: `Please contact the ${THEMESETTINGS.company_name} team at ${THEMESETTINGS.contact.customer_support.email} if you believe a technical error caused this issue.`,
        },
        {
          component: 'ResponsiveButton',
          props: {
            onClick: 'func:this.props.reduxRouter.goBack',
            onclickProps: '/',
            style: {
              marginTop: 40,
            },
            buttonProps: {
              size: 'isMedium',
              className: 'error404',
              color: 'isPrimary',
            },
            passProps: {
              className: '',
            },
          },
          children: 'Go Back',
        },
        ],
      },],
    },],
};

module.exports = {
  'containers': {
    '/ext/uac/account-access': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
    '/ext/uac/user-access': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
    '/edit-account-access/:id': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
    '/edit-user-access/:id': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
    '/ext/uac/manage-roles': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
    '/add-userrole': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
    '/edit-userrole/:id': {
      'layout': four_oh_four_layout,
      callbacks: [],
      'onFinish': 'render',
      'pageData':{
        'title':'Page Not Found',
        'navLabel':'Error Page Not Found',
      },
    },
  },
};
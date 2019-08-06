'use strict';
module.exports = {
  'strategy': {
    'status' : null,
    'version' : 1,
    'module_run_order' : [ 
      {
        'type' : 'requirements',
        'name' : 'basic_eligibility_requirements',
        'active' : true,
        'display_name' : 'Basic Eligibility Requirements',
        'lookup_name' : 'basic_eligibility_requirements_requirements_0',
      }, 
      {
        'type' : 'scorecard',
        'name' : 'credit_scorecard',
        'active' : true,
        'display_name' : 'Credit Scorecard',
        'lookup_name' : 'credit_scorecard_scorecard_1',
      }, 
      {
        'type' : 'output',
        'name' : 'loan_pricing_and_terms',
        'active' : true,
        'display_name' : 'Loan Pricing and Terms',
        'lookup_name' : 'loan_pricing_and_terms_output_2',
      }, 
      {
        'type' : 'calculations',
        'name' : 'payment_amount_calculations',
        'active' : true,
        'display_name' : 'Payment Amount Calculations',
        'lookup_name' : 'payment_amount_calculations_calculations_3',
      }, 
      {
        'type' : 'requirements',
        'name' : 'maximum_exposure_limits',
        'active' : true,
        'display_name' : 'Maximum Exposure Limits',
        'lookup_name' : 'maximum_exposure_limits_requirements_4',
      },
    ],
    'entitytype' : 'strategy',
    'name' : 'example_strategy_v1',
    'description' : 'Simple loan underwriting decision process.',
    'title' : 'example_strategy',
    'user' : {
      'creator' : 'DigiFi',
      'updater' : 'DigiFi',
    },
    'latest_version' : true,
    'display_name' : 'Example Strategy (v1)',
    'display_title' : 'Example Strategy',
    'organization' : null,
    '__v' : 0,
    'modules' : {
      'basic_eligibility_requirements_requirements_0' : [ 
        {
          'name' : 'basic_eligibility_requirements',
          'display_name' : 'Basic Eligibility Requirements',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5bdb4969899b702122603e52', 
            '5bdb497a899b702122603e5a', 
            '5bdb4989899b702122603e62', 
            '5bdb49ad899b702122603e71', 
            '5bdb49cc899b702122603e82',
          ],
          'description' : 'Minimum credit requirements for loan eligibility',
        },
      ],
      'credit_scorecard_scorecard_1' : [ 
        {
          'name' : 'high_credit_score',
          'display_name' : 'High Credit Score',
          'dataintegration_id' : null,
          'type' : 'scorecard',
          'conditions' : [ 
            '5bdb4b2f899b702122603f2b',
          ],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5bdb4a58899b702122603ec0', 
            '5bdb4a6a899b702122603ec8', 
            '5bdb4a78899b702122603ed0', 
            '5bdb4a87899b702122603edb', 
            '5bdb4a9a899b702122603ee4', 
            '5bdb4aa8899b702122603eec', 
            '5bdb4ac6899b702122603efa', 
            '5bdb4ae1899b702122603f04', 
            '5bdb4af1899b702122603f0c', 
            '5bdb4b00899b702122603f17', 
            '5bdb4b0f899b702122603f1f',
          ],
          'initial_score' : '200',
          'description' : 'Scorecard for applicants with high credit scores',
          'output_variable' : '5bdb4a00899b702122603e9b',
        }, 
        {
          'name' : 'low_credit_score',
          'type' : 'scorecard',
          'display_name' : 'Low Credit Score',
          'conditions' : [ 
            '5bdb5438899b702122604cb2',
          ],
          'ruleset' : [ 
            '5bdb4ba3899b702122603f59', 
            '5bdb4ba3899b702122603f5b', 
            '5bdb4ba3899b702122603f5d', 
            '5bdb4ba3899b702122603f5f', 
            '5bdb4ba3899b702122603f61', 
            '5bdb4ba3899b702122603f63', 
            '5bdb4ba3899b702122603f6b', 
            '5bdb4ba3899b702122603f6d', 
            '5bdb4bf0899b702122603f9b',
          ],
          'description' : 'Scorecard for applicants with low credit scores',
          'output_variable' : '5bdb4a00899b702122603e9b',
          'initial_score' : '0',
        },
      ],
      'loan_pricing_and_terms_output_2' : [ 
        {
          'name' : 'loan_pricing_and_terms',
          'display_name' : 'Loan Pricing and Terms',
          'dataintegration_id' : null,
          'type' : 'output',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5bdb4ced899b70212260402f', 
            '5bdb4d06899b70212260403b', 
            '5bdb4d1d899b702122604049', 
            '5bdb4d3f899b702122604057',
          ],
          'description' : 'Assign the loan pricing and terms based on custom score',
        },
      ],
      'payment_amount_calculations_calculations_3' : [ 
        {
          'name' : 'post_pricing_calculations',
          'display_name' : 'Post Pricing Calculations',
          'dataintegration_id' : null,
          'type' : 'calculations',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5bdb4da2899b702122604082', 
            '5bdb4dbd899b70212260408c',
          ],
          'description' : 'Calculation of values that required pricing outputs',
        },
      ],
      'maximum_exposure_limits_requirements_4' : [ 
        {
          'name' : 'maximum_exposure_limits',
          'display_name' : 'Maximum Exposure Limits',
          'dataintegration_id' : null,
          'type' : 'requirements',
          'conditions' : [],
          'inputs' : null,
          'outputs' : null,
          'ruleset' : [ 
            '5bdb4ddd899b70212260409b', 
            '5bdb4df0899b7021226040a4',
          ],
          'description' : 'Limits and caps based on credit ratios',
        },
      ],
    },
  },
};
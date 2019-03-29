/* global  define */

/*
 * universalModuleDefinition allows people to import
 * the list using their preferred method
 * and is inspired by webpackUniversalModuleDefinition
 */
;(function universalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define('austinTechList', [], factory)
  } else if (typeof exports === 'object') {
    exports['austinTechList'] = factory()
  } else {
    root['austinTechList'] = factory()
  }
})(this, function factory() {
  // THE LIST STARTS HERE
  return [
    {
      name: 'Aunt Bertha',
      homepage: 'https://www.auntbertha.com/',
      careers: '',
      address: '3429 Executive Center Dr, Austin, TX 78731',
      plusCode: '9753+F3 Austin, Texas'
    },

    {
      name: 'Bloomfire',
      homepage: 'https://bloomfire.com/',
      careers: 'https://bloomfire.com/about-us/careers/',
      address: '1717 W 6th St, Austin, TX 78703',
      plusCode: '76GM+FM Austin, Texas'
    },

    {
      name: 'Bright Health',
      homepage: 'https://brighthealthplan.com/',
      careers: 'https://jobs.lever.co/brighthealthplan',
      address: '1135 W 6th St Suite 130, Austin, TX 78703',
      plusCode: '76CR+XX Austin, Texas'
    },

    {
      name: 'Bumble',
      homepage: 'https://bumble.com/',
      careers: 'https://bumble.com/jobs',
      address: '1105 W 41st St, Austin, TX 78756',
      plusCode: '8755+R3 Austin, Texas'
    },

    {
      name: 'Cloudflare',
      homepage: 'https://www.cloudflare.com/',
      careers: 'https://www.cloudflare.com/careers/departments/engineering/',
      address: '106 E 6th St, Austin, TX 78701',
      plusCode: '7795+63 Austin, Texas'
    },

    {
      name: 'Compeat',
      homepage: 'https://www.compeat.com/',
      careers: 'https://boards.greenhouse.io/compeat',
      address: '11500 Alterra Pkwy #130, Austin, TX 78758',
      plusCode: 'C72H+FF Austin, Texas',
    },

    {
      name: 'General Motors',
      homepage: 'https://www.gm.com/',
      careers: 'https://search-careers.gm.com/c/information-technology-jobs',
      address: '13201 McCallen Pass, Austin, TX 78753',
      plusCode: 'C87Q+4V Austin, Texas'
    },

    {
      name: 'HomeAway',
      homepage: 'https://www.homeaway.com/',
      careers: 'https://www.homeaway.com/careers/openings/',
      address: '11800 Domain Blvd #300, Austin, TX 78758',
      plusCode: 'C73H+V9 Austin, Texas'
    },

    {
      name: 'HotSchedules',
      homepage: 'https://www.hotschedules.com/',
      careers: 'https://www.hotschedules.com/careers/',
      address: '6504 Bridge Point Pkwy Ste 425, Austin, TX 78730',
      plusCode: '953W+XW Austin, Texas'
    },

    {
      name: 'JASK',
      homepage: 'https://jask.com/',
      careers: 'https://jask.com/company/careers/',
      address: '11501 Rock Rose Ave, Suite 200, Austin, TX 78758',
      plusCode: 'C72G+5V Austin, Texas'
    },

    {
      name: 'Keet Health',
      homepage: 'https://www.keethealth.com/',
      careers: 'https://www.keethealth.com/jobs/',
      address: '200 E 6th St #206, Austin, TX 78701',
      plusCode: '7795+4H Austin, Texas'
    },

    {
      name: 'Khan Academy',
      homepage: 'https://www.khanacademy.org/',
      careers: 'https://www.khanacademy.org/jobs/',
      address: 'Remote',
      plusCode: ''
    },

    {
      name: 'Optimizely',
      homepage: 'https://www.optimizely.com/',
      careers: 'https://www.optimizely.com/careers/',
      address: '600 Congress Ave, Austin, TX 78701',
      plusCode: '7794+8R Austin, Texas'
    },

    {
      name: 'Pinpoint',
      homepage: 'https://pinpoint.com/',
      careers: 'https://pinpoint.com/careers',
      address: '11801 Domain Blvd, 3rd Floor, Austin, TX 78758',
      plusCode: 'C74H+2G Austin, Texas'
    },

    {
      name: 'Proof',
      homepage: 'https://useproof.com/',
      careers: 'https://useproof.com/careers',
      address: '200 E 6th St #310, Austin, TX 78701',
      plusCode: '7795+4H Austin, Texas'
    },

    {
      name: 'RapidDeploy',
      homepage: 'https://www.rapiddeploy.com/',
      careers: 'https://www.rapiddeploy.com/careers',
      address: '119 Nueces St RapidDeploy, 2nd Floor, Austin, TX 78701',
      plusCode: '7782+64 Austin, Texas'
    },

    {
      name: 'RetailMeNot',
      homepage: 'https://www.retailmenot.com/',
      careers: 'https://jobs.lever.co/retailmenot',
      address: '301 Congress Ave #700, Austin, TX 78701',
      plusCode: '7784+5J Austin, Texas'
    },

    {
      name: 'RunTitle',
      homepage: 'https://www.runtitle.com/',
      careers: 'https://www.runtitle.com/careers',
      address: '210 Barton Springs Rd #225, Austin, TX 78704',
      plusCode: '7762+2R Austin, Texas'
    },

    {
      name: 'ShipStation',
      homepage: 'https://www.shipstation.com/',
      careers: 'https://www.shipstation.com/careers/',
      address: '3800 N Lamar Blvd #220, Austin, TX 78756',
      plusCode: '8744+FR Austin, Texas'
    },

    {
      name: 'Outdoor Voices',
      homepage: 'https://www.outdoorvoices.com/',
      careers: 'https://www.outdoorvoices.com/pages/careers',
      address: '606 Blanco St, Austin, TX 78703',
      plusCode: '76FV+75 Austin, Texas',
    },

    {
      name: 'The Zebra',
      homepage: 'https://www.thezebra.com/',
      careers: 'https://www.thezebra.com/careers/#careers',
      address: '301 Chicon St Ste A, Austin, TX 78702',
      plusCode: '775G+HJ Austin, Texas'
    },

    {
      name: 'TrendKite'
      homepage: 'https://www.trendkite.com/',
      careers: 'https://www.trendkite.com/careers',
      address: '800 Brazos St #340, Austin, TX 78701',
      plusCode: '77C5+2M Austin, Texas',
    },

    {
      name: 'uShip',
      homepage: 'https://www.uship.com/',
      careers: 'https://about.uship.com/careers/listings/',
      address: '205 E Riverside Dr, Austin, TX 78704',
      plusCode: '7734+W2 Austin, Texas'
    },

    {
      name: 'YouEarnedIt',
      homepage: 'https://youearnedit.com/',
      careers: 'https://youearnedit.com/careers/',
      address: '206 E 9th St, Austin, TX 78701',
      plusCode: '77C6+64 Austin, Texas'
    }
  ]
  // THE LIST ENDS HERE
})

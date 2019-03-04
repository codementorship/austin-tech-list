/*
 * universalModuleDefinition allows people to import
 * the list using their preferred method
 * and is inspired by webpackUniversalModuleDefinition
 */
(function universalModuleDefinition (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define('austinTechList', [], factory)
  } else if (typeof exports === 'object') {
    exports['austinTechList'] = factory()
  } else {
    root['austinTechList'] = factory()
  }
})(this, function factory () {
  // THE LIST STARTS HERE
  return [
    {
      name: 'Aunt Bertha',
      homepage: 'https://www.auntbertha.com/',
      careers: 'https://www.auntbertha.com/',
      address: '3429 Executive Center Dr, Austin, TX 78731',
      plusCode: '9753+F3 Austin, Texas',
    },

    {
      name: 'Bloomfire',
      homepage: 'https://bloomfire.com/',
      careers: 'https://bloomfire.com/about-us/careers/',
      address: '1717 W 6th St, Austin, TX 78703',
      plusCode: '76GM+FM Austin, Texas',
    },

    {
      name: 'Bumble',
      homepage: 'https://bumble.com/',
      careers: 'https://bumble.com/jobs',
      address: '1105 W 41st St, Austin, TX 78756',
      plusCode: '8755+R3 Austin, Texas',
    },

    {
      name: 'Cloudflare',
      homepage: 'https://www.cloudflare.com/',
      careers: 'https://www.cloudflare.com/careers/departments/engineering/',
      address: '106 E 6th St, Austin, TX 78701',
      plusCode: '7795+63 Austin, Texas',
    },

    {
      name: 'HomeAway',
      homepage: 'https://www.homeaway.com/',
      careers: 'https://www.homeaway.com/careers/openings/',
      address: '11800 Domain Blvd #300, Austin, TX 78758',
      plusCode: 'C73H+V9 Austin, Texas',
    },

    {
      name: 'Keet Health',
      homepage: 'https://www.keethealth.com/',
      careers: 'https://www.keethealth.com/jobs/',
      address: '200 E 6th St #206, Austin, TX 78701',
      plusCode: '7795+4H Austin, Texas',
    },

    {
      name: 'Khan Academy',
      homepage: 'https://www.khanacademy.org/',
      careers: 'https://www.khanacademy.org/jobs/',
      address: 'Remote',
      plusCode: '',
    },

    {
      name: 'ShipStation',
      homepage: 'https://www.shipstation.com/',
      careers: 'https://www.shipstation.com/careers/',
      address: '3800 N Lamar Blvd #220, Austin, TX 78756',
      plusCode: '8744+FR Austin, Texas',
    },

    {
      name: 'The Zebra',
      homepage: 'https://www.thezebra.com/',
      careers: 'https://www.thezebra.com/careers/#careers',
      address: '301 Chicon St Ste A, Austin, TX 78702',
      plusCode: '775G+HJ Austin, Texas',
    },

    {
      name: 'uShip',
      homepage: 'https://www.uship.com/',
      careers: 'https://about.uship.com/careers/listings/',
      address: '205 E Riverside Dr, Austin, TX 78704',
      plusCode: '7734+W2 Austin, Texas',
    },

  ]
  // THE LIST ENDS HERE
})

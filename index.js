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
      name: 'Alchemy Systems',
      homepage: 'https://www.alchemysystems.com/',
      careers:
        'http://alchemysystems.hrmdirect.com/employment/job-openings.php',
      address: '5301 Riata Park Ct F, Austin, TX 78727',
      plusCode: 'C7J8+MW Austin, Texas'
    },

    {
      name: 'Atlassian',
      homepage: 'https://www.atlassian.com/',
      careers: 'https://www.atlassian.com/company/careers/austin',
      address: '303 Colorado St #1600, Austin, TX 78701',
      plusCode: '7784+83 Austin, Texas'
    },

    {
      name: 'Aunt Bertha',
      homepage: 'https://www.auntbertha.com/',
      careers: '',
      address: '3429 Executive Center Dr, Austin, TX 78731',
      plusCode: '9753+F3 Austin, Texas'
    },

    {
      name: 'Bestow',
      homepage: 'https://hellobestow.com/',
      careers: 'https://hellobestow.com/careers/',
      address: '106 E 6th St #220, Austin, TX 78701',
      plusCode: '7795+63 Austin, Texas'
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
      name: 'Carnegie Technologies',
      homepage: 'https://www.carnegietechnologies.com/',
      careers: 'https://www.carnegietechnologies.com/careers/',
      address: '9737 Great Hills Trail #260, Austin, TX 78759',
      plusCode: '96VX+62 Austin, Texas'
    },

    {
      name: 'Catalyst Marketing',
      homepage: 'https://thelyst.com/',
      careers: 'https://thelyst.com/careers',
      address: '110 Wild Basin Rd S #350, Austin, TX 78746',
      plusCode: '854C+HV Austin, Texas'
    },

    {
      name: 'Charles Schwab',
      homepage: 'https://www.schwab.com/',
      careers:
        'https://www.schwabjobs.com/ListJobs/All/Search/schwab-position-located-in/Austin',
      address: '2309 Gracy Farms Ln, Austin, TX 78758',
      plusCode: '97XP+MX Austin, Texas'
    },

    {
      name: 'Cloudflare',
      homepage: 'https://www.cloudflare.com/',
      careers: 'https://www.cloudflare.com/careers/departments/engineering/',
      address: '106 E 6th St, Austin, TX 78701',
      plusCode: '7795+63 Austin, Texas'
    },

    {
      name: 'CognitiveScale',
      homepage: 'https://www.cognitivescale.com/',
      careers: 'https://www.cognitivescale.com/careers/',
      address: '9500 Arboretum Blvd L-1, Austin, TX 78759',
      plusCode: '96RW+2J Austin, Texas'
    },

    {
      name: 'Compeat',
      homepage: 'https://www.compeat.com/',
      careers: 'https://boards.greenhouse.io/compeat',
      address: '11500 Alterra Pkwy #130, Austin, TX 78758',
      plusCode: 'C72H+FF Austin, Texas'
    },

    {
      name: 'Cox Automotive',
      homepage: 'https://www.coxautoinc.com/',
      careers: 'https://jobs.coxenterprises.com/Cox-Automotive',
      address: '10415 Morado Cir, Austin, TX 78759',
      plusCode: 'C722+G4 Austin, Texas'
    },

    {
      name: 'data.world',
      homepage: 'https://data.world/',
      careers: 'https://data-world.breezy.hr/',
      address: '7000 Mopac Service Rd #425, Austin, TX 78731',
      plusCode: '9732+77 Austin, Texas'
    },

    {
      name: 'Drillinginfo',
      homepage: 'https://info.drillinginfo.com/',
      careers: 'https://info.drillinginfo.com/careers/',
      address: '2901 Vía Fortuna #200, Austin, TX 78746',
      plusCode: '752X+4X Austin, Texas'
    },

    {
      name: 'Dun & Bradstreet',
      homepage: 'https://www.dnb.com/',
      careers: 'https://dnb.wd1.myworkdayjobs.com/Careers',
      address: '7700 West Parmer Lane, Austin, TX 78729',
      plusCode: 'F65X+96 Austin, Texas'
    },

    {
      name: 'EverlyWell',
      homepage: 'https://www.everlywell.com/',
      careers: 'https://www.everlywell.com/careers/',
      address: '800 W Cesar Chavez St Austin, TX 78701',
      plusCode: '768X+V5 Austin, Texas'
    },

    {
      name: 'Evernote',
      homepage: 'https://evernote.com/',
      careers: 'https://evernote.com/careers',
      address: '3300 N Interstate 35 Frontage Rd #400, Austin, TX 78705',
      plusCode: '77RG+GX Austin, Texas'
    },

    {
      name: 'Fiserv',
      homepage: 'https://www.fiserv.com/',
      careers: 'https://www.careers.fiserv.com/',
      address:
        '8310 North Capital of Texas Hwy, Prominent Pointe Bldg 2, Suite 250, Austin, TX 78731',
      plusCode: '96QJ+3G Austin, Texas'
    },

    {
      name: 'Forcepoint',
      homepage: 'https://www.forcepoint.com/',
      careers: 'https://forcepoint.wd1.myworkdayjobs.com/external-careers',
      address: '10900 Stonelake Blvd #350, Austin, TX 78759',
      plusCode: 'C727+QF Austin, Texas'
    },

    {
      name: 'Gartner',
      homepage: 'https://www.gartner.com/',
      careers: 'https://jobs.gartner.com/careers',
      address: '106 East Sixth Street Suite 900, Austin, TX 78701',
      plusCode: '7795+72 Austin, Texas'
    },

    {
      name: 'General Motors',
      homepage: 'https://www.gm.com/',
      careers: 'https://search-careers.gm.com/c/information-technology-jobs',
      address: '13201 McCallen Pass, Austin, TX 78753',
      plusCode: 'C87Q+4V Austin, Texas'
    },

    {
      name: 'Gotrans­verse',
      homepage: 'https://gotransverse.com/',
      careers: 'https://gotransverse.com/careers',
      address: '600 Congress Ave #2800, Austin, TX 78701',
      plusCode: '7794+FP Austin, Texas'
    },

    {
      name: 'Headspring',
      homepage: 'https://headspring.com/',
      careers: 'https://headspring.com/about/careers/',
      address: '10415 Morado Cir #300, Austin, TX 78759',
      plusCode: 'C722+H9 Austin, Texas'
    },

    {
      name: 'Help.com',
      homepage: 'https://www.help.com/',
      careers: 'https://jobs.help.com/',
      address: '4016, 11000 Metric Blvd, Austin, TX 78758',
      plusCode: '97QQ+QM Austin, Texas'
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
      name: 'Indeed',
      homepage: 'https://www.indeed.com/',
      careers: 'https://www.indeed.jobs/',
      address: '6433 Champion Grandview Way Building 1, Austin, TX 78750',
      plusCode: '9674+5G Austin, Texas'
    },

    {
      name: 'Indeed (Downtown)',
      homepage: 'https://www.indeed.com/',
      careers: 'https://www.indeed.jobs/',
      address: '201 W 5th St 18th Floor, Austin, TX 78701',
      plusCode: '7784+W3 Austin, Texas'
    },

    {
      name: 'Indio',
      homepage: 'https://www.useindio.com/',
      careers: 'https://www.useindio.com/careers/',
      address: '1300 Guadalupe St Ste 400, Austin, TX 78701',
      plusCode: '77G4+GF Austin, Texas'
    },

    {
      name: 'Interactions',
      homepage: 'https://www.interactions.com/',
      careers: 'https://www.interactions.com/about-us/careers/open-positions/',
      address: '9101 Burnet Rd #203, Austin, TX 78758',
      plusCode: '97FF+RR Austin, Texas'
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
      name: 'Khoros',
      homepage: 'https://khoros.com/',
      careers: 'https://khoros.com/about/careers',
      address: '6850 Austin Center Blvd #180, Austin, TX 78731',
      plusCode: '962W+PW Austin, Texas'
    },

    {
      name: 'Lightspeed Systems',
      homepage: 'https://www.lightspeedsystems.com/',
      careers: 'https://www.lightspeedsystems.com/company/careers/',
      address: '2500 Bee Caves Rd #350, Austin, TX 78746',
      plusCode: '7698+76 Austin, Texas'
    },

    {
      name: 'Liveoak Technologies',
      homepage: 'https://www.liveoak.net/',
      careers: 'https://www.liveoak.net/about-us/careers/',
      address: '600 Congress Ave, Austin, TX 78701',
      plusCode: '7794+CP Austin, Texas'
    },

    {
      name: 'Living Security',
      homepage: 'https://www.livingsecurity.com/',
      careers: 'https://www.livingsecurity.com/join-our-team',
      address: '1401 Lavaca Street #122 Austin, TX 78701',
      plusCode: '77G5+P5 Austin, Texas'
    },

    {
      name: 'Meshify',
      homepage: 'https://meshify.com/',
      careers: '',
      address: '706 W Ben White Blvd A, Austin, TX 78704',
      plusCode: '66HH+4Q Austin, Texas'
    },

    {
      name: 'MODintelechy',
      homepage: 'https://modintelechy.com/',
      careers: 'https://modintelechy.com/careers/',
      address: '1201 W 24th St #104, Austin, TX 78705',
      plusCode: '76QX+7M Austin, Texas'
    },

    {
      name: 'OJO',
      homepage: 'https://landing.ojo.me/',
      careers: 'https://corporate.ojo.me/careers',
      address: '720 Brazos St #110, Austin, TX 78701',
      plusCode: '7795+QH Austin, Texas'
    },

    {
      name: 'Optimizely',
      homepage: 'https://www.optimizely.com/',
      careers: 'https://www.optimizely.com/careers/',
      address: '600 Congress Ave, Austin, TX 78701',
      plusCode: '7794+8R Austin, Texas'
    },

    {
      name: 'Outdoor Voices',
      homepage: 'https://www.outdoorvoices.com/',
      careers: 'https://www.outdoorvoices.com/pages/careers',
      address: '606 Blanco St, Austin, TX 78703',
      plusCode: '76FV+75 Austin, Texas'
    },

    {
      name: 'Pinpoint',
      homepage: 'https://pinpoint.com/',
      careers: 'https://pinpoint.com/careers',
      address: '11801 Domain Blvd, 3rd Floor, Austin, TX 78758',
      plusCode: 'C74H+2G Austin, Texas'
    },

    {
      name: 'PowerSchool',
      homepage: 'https://www.powerschool.com/',
      careers:
        'https://www.powerschool.com/company/careers/powerschool-careers/',
      address: '2705 Bee Caves Rd #345, Austin, TX 78746',
      plusCode: '7697+M5 Austin, Texas'
    },

    {
      name: 'Proof',
      homepage: 'https://useproof.com/',
      careers: 'https://useproof.com/careers',
      address: '200 E 6th St #310, Austin, TX 78701',
      plusCode: '7795+4H Austin, Texas'
    },

    {
      name: 'Pushnami',
      homepage: 'https://pushnami.com/',
      careers: 'https://pushnami.com/careers/',
      address: '6600 N Lamar Blvd, Austin, TX 78752',
      plusCode: '87MH+R5 Austin, Texas'
    },

    {
      name: 'Rabbet',
      homepage: 'https://rabbet.com/',
      careers: 'https://rabbet.com/career/',
      address: '2700 W Anderson Lane, Suite 205-15, Austin, TX 78757',
      plusCode: '9758+J7 Austin, Texas'
    },

    {
      name: 'RapidDeploy',
      homepage: 'https://www.rapiddeploy.com/',
      careers: 'https://www.rapiddeploy.com/careers',
      address: '119 Nueces St RapidDeploy, 2nd Floor, Austin, TX 78701',
      plusCode: '7782+64 Austin, Texas'
    },

    {
      name: 'Rebilly',
      homepage: 'https://www.rebilly.com/',
      careers: 'https://www.rebilly.com/careers/',
      address: '3801 N Capital of Texas Hwy, Austin, TX 78746',
      plusCode: '85MW+X5 Austin, Texas'
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
      name: 'ScaleFactor',
      homepage: 'https://scalefactor.com/',
      careers: 'https://scalefactor.com/careers/',
      address: '1408 E 13th St, Austin, TX 78702',
      plusCode: '77FG+P6 Austin, Texas'
    },

    {
      name: 'Senseye',
      homepage: 'http://www.senseye.co/',
      careers: 'https://senseye.workable.com/',
      address: '801 Congress Ave Suite 200, Austin, TX 78701',
      plusCode: '7795+X8 Austin, Texas'
    },

    {
      name: 'ShipStation',
      homepage: 'https://www.shipstation.com/',
      careers: 'https://www.shipstation.com/careers/',
      address: '3800 N Lamar Blvd #220, Austin, TX 78756',
      plusCode: '8744+FR Austin, Texas'
    },

    {
      name: 'Social Solutions',
      homepage: 'https://www.socialsolutions.com/',
      careers: 'https://www.socialsolutions.com/about-us/working-here/careers/',
      address: '10801 N Mopac Expy, Austin, TX 78759',
      plusCode: '97X9+6W Austin, Texas'
    },

    {
      name: 'SolarWinds',
      homepage: 'https://www.solarwinds.com/',
      careers: 'https://solarwinds.jobs/texas/usa/jobs/',
      address: 'Bldg 400, 7171 Southwest Pkwy, Austin, TX 78735',
      plusCode: '742Q+87 Austin, Texas'
    },

    {
      name: 'SpareFoot',
      homepage: 'https://www.sparefoot.com/',
      careers: 'https://about.sparefoot.com/jobs',
      address: '3300 N Interstate Hwy 35 Suite 200, Austin, TX 78705',
      plusCode: '77RG+FV Austin, Texas'
    },

    {
      name: 'SparkCognition',
      homepage: 'https://www.sparkcognition.com/',
      careers: 'https://www.sparkcognition.com/careers/',
      address: '4030 W Braker Ln #500, Austin, TX 78759',
      plusCode: '97X7+86 Austin, Texas'
    },

    {
      name: 'Square Root',
      homepage: 'https://square-root.com/',
      careers: 'https://square-root.com/careers/',
      address: '508 Oakland Ave, Austin, TX 78703',
      plusCode: '76FQ+FF Austin, Texas'
    },

    {
      name: 'Stoplight Inc',
      homepage: 'https://stoplight.io/',
      careers: 'https://angel.co/stoplight/jobs/',
      address: '1100 S 1st St, Austin, TX 78704',
      plusCode: '763W+8J Austin, Texas'
    },

    {
      name: 'The University of Texas at Austin',
      homepage: 'https://www.utexas.edu',
      careers: 'https://www.utexas.edu/jobs',
      address: '110 Inner Campus Drive, Austin, TX 78705',
      plusCode: '77P6+F7 Austin, Texas'
    },

    {
      name: 'The Zebra',
      homepage: 'https://www.thezebra.com/',
      careers: 'https://www.thezebra.com/careers/#careers',
      address: '301 Chicon St Ste A, Austin, TX 78702',
      plusCode: '775G+HJ Austin, Texas'
    },

    {
      name: 'thoughtbot',
      homepage: 'https://thoughtbot.com/',
      careers: 'https://thoughtbot.com/jobs#austin',
      address: '1601 W 6th St, Austin, TX 78703',
      plusCode: '76FP+VR Austin, Texas'
    },

    {
      name: 'TrendKite',
      homepage: 'https://www.trendkite.com/',
      careers: 'https://www.trendkite.com/careers',
      address: '800 Brazos St #340, Austin, TX 78701',
      plusCode: '77C5+2M Austin, Texas'
    },

    {
      name: 'TrustRadius',
      homepage: 'https://www.trustradius.com/',
      careers: 'https://www.trustradius.com/static/careers',
      address: '9737 Great Hills Trail Suite 340, Austin, TX 78759',
      plusCode: '96VX+52 Austin, Texas'
    },

    {
      name: 'Under Armour',
      homepage: 'https://www.underarmour.com',
      careers: 'https://careers.underarmour.com/austin',
      address: '211 Walter Seaholm Dr #200, Austin, TX 78701',
      plusCode: '768W+XW Austin, Texas'
    },

    {
      name: 'uShip',
      homepage: 'https://www.uship.com/',
      careers: 'https://about.uship.com/careers/listings/',
      address: '205 E Riverside Dr, Austin, TX 78704',
      plusCode: '7734+W2 Austin, Texas'
    },

    {
      name: 'Vyze',
      homepage: 'https://vyze.com/',
      careers: 'https://vyze.com/careers/',
      address: '2700 W Anderson Ln Suite 119, Austin, TX 78757',
      plusCode: '9758+G6 Austin, Texas'
    },

    {
      name: 'WP Engine',
      homepage: 'https://wpengine.com/',
      careers: 'https://wpengine-careers.com/job-openings/',
      address: '504 Lavaca St #1000, Austin, TX 78701',
      plusCode: '7793+7G Austin, Texas'
    },

    {
      name: 'YouEarnedIt',
      homepage: 'https://youearnedit.com/',
      careers: 'https://youearnedit.com/careers/',
      address: '206 E 9th St, Austin, TX 78701',
      plusCode: '77C6+64 Austin, Texas'
    },

    {
      name: 'ZeroCater',
      homepage: 'https://zerocater.com/',
      careers: 'https://zerocater.com/about/careers/',
      address: '127 E Riverside Dr #101, Austin, TX 78704',
      plusCode: '7743+6Q Austin, Texas'
    } 
    
  ]
  // THE LIST ENDS HERE
})

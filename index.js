/*
 * universalModuleDefinition allows people to import
 * the list using their preferred method
 * and is inspired by webpackUniversalModuleDefinition
 */
(function universalModuleDefinition(root, factory){
  if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("austinTechList", [], factory);
	else if(typeof exports === 'object')
		exports["austinTechList"] = factory();
	else
		root["austinTechList"] = factory();
})(this, function factory() {

  // THE LIST STARTS HERE
  return [
    {
      name: 'Bumble',
      homepage: 'https://bumble.com/',
      careers: 'https://bumble.com/jobs',
      address: 'West 41st Street, Austin, TX',
      plusCode: '8755+R3 Austin, Texas',
    },

    {
      name: 'Keet Health',
      homepage: 'https://www.keethealth.com/',
      careers: 'https://www.keethealth.com/jobs/',
      address: 'East 6th Street #206, Austin, TX',
      plusCode: '7795+4H Austin, Texas',
    },

    {
      name: 'ShipStation',
      homepage: 'https://www.shipstation.com/',
      careers: 'https://www.shipstation.com/careers/',
      address: '3800 N Lamar Blvd #220, Austin, TX 78756',
      plusCode: '8744+FR Austin, Texas',
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

});

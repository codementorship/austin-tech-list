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
      name: 'Keet Health',
      homepage: 'https://www.keethealth.com/',
      careers: 'https://www.keethealth.com/jobs/',
      address: 'East 6th Street #206, Austin, TX',
      plusCode: '7795+4H Austin, Texas',
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

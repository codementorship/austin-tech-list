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
      name: 'Cloudflare',
      homepage: 'https://www.cloudflare.com/',
      careers: 'https://www.cloudflare.com/careers/departments/engineering/',
      address: '106 E 6th St, Austin, TX 78701',
      plusCode: '7795+63 Austin, Texas',
    },

    {
      name: 'Keet Health',
      homepage: 'https://www.keethealth.com/',
      careers: 'https://www.keethealth.com/jobs/',
      address: 'East 6th Street #206, Austin, TX',
      plusCode: '7795+4H Austin, Texas',
    },
  ]
  // THE LIST ENDS HERE

});

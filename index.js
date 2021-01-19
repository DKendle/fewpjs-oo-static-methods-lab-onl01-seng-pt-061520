class Formatter {
  //add static methods here
 
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-\s']+/g, '');
  }
  static titleize(str){
   let o = str.split(" ")
  }
}
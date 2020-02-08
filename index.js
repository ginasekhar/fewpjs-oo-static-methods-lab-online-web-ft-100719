class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() +  
            string.slice(1); 
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string) {

    const artPrepConj = ["a", "an", "and", "at", "but",  "by", "for", "from", "of", "the"];
    const string_array = string.split(' ');
    let result_array = string_array.map(function(str) {
      if  (artPrepConj.includes(str)) {
        return str; 
      } else {
        return Formatter.capitalize(str);
      }
    });

    result_array[0] = Formatter.capitalize(result_array[0])
    
    return result_array.join(' ');

  }

}
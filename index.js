class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g,'')
  }

  static titleize( sentence ) {
    const doNotTitleize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newSentence
    let sentenceArray = []
    sentenceArray = sentence.split(" ")
    sentenceArray[0]=Formatter.capitalize(sentenceArray[0])
    for(let i=0; i< sentenceArray.length;i++){
      if(!doNotTitleize.includes(sentenceArray[i])){
        sentenceArray[i]= Formatter.capitalize(sentenceArray[i])
      } else {sentenceArray[i]= sentenceArray[i]}
    }
    newSentence = sentenceArray.join(" ")
    return newSentence

  }
}
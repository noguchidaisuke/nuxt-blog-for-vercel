import Vue from 'vue'

Vue.filter('shortenText', (text, maxLength = 35) => {
  if (text && typeof text === 'string') {
    const finalChar = text.length > maxLength ? '...' : ''
    return text.slice(0, maxLength) + finalChar
  }

  return ''
})

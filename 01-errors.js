function generateError() {
  try {
    console.log('Before errors')
    // here there will be erros...
    lalalala
    console.log('After errors')
  } catch (err) {
    console.log('Error:', err)
  } finally {
    console.log('finally!')
  }
}

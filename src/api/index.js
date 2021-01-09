module.exports = (req, res) => {
  res.status(200).send({
    time: new Date().now()
    message: 'Heeloooo'
  })
}

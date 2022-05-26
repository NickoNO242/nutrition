
const navigationController ={
    getHome : (req, res , next) => {
        res.render('index')
    },
    getRegister : (req, res , next) => {
        res.render('registerForm')
    }
}

module.exports =navigationController
const registerUser = (req, res) => {
    const username = req.body.name;
    const userpassword = req.body.password;
    const useremail = req.body.email;

    res.json({
        success: true,
    })
}

module.exports = registerUser;


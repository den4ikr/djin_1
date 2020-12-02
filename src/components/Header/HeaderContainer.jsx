import { connect } from "react-redux"

const { default: Header } = require("./Header")

const HeaderContainer = (props) => {
    return (
        <Header />
    )
}

export default connect ()(HeaderContainer);
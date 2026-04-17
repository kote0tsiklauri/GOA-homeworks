import React from "react";

class InnerBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true ,error: error};
    }

    componentDidCatch(error, errorInfo) {
        const errormsg = {
            msg:error.message,
            stack:errorInfo.stack
        }

        console.log(errormsg)
    }

    retry = ()=>{
        return {hasError:false}
    }

    render() {
        if (this.state.hasError) {
            let message = "მოხდა შეცდომა(inner)";


            return (
                <div>
                    <h1>{message}</h1>
                    <button onClick={this.retry}>Retry</button>
                </div>
            );
        }
        return this.props.children;
    }

}

export default InnerBoundary;
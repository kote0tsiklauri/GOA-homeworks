import React from "react";

class ErrorBoundary extends React.Component {
        constructor(props) {
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error) {
        return { hasError: true ,error: error};
    }

    componentDidCatch(error, errorInfo) {
        const errormsg = {
            msg:error.message,
            stack:errorInfo.componentStack
        };

        console.log(errormsg)
    }

    retry = ()=>{
        return {hasError:false}
    }

    render() {
        if (this.state.hasError) {

            let message = "უცნობი შეცდომა";
            const error = this.state.error;

            if (error instanceof TypeError) {
                message = "ტიპშია შეცდომა";
            }else if (error instanceof ReferenceError) {
                message = "ცვლადი არ არსებობს";
            }

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

export default ErrorBoundary;
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
            return (
            <div style={{
                padding: "20px",
                border: "1px solid red",
                borderRadius: "8px",
                backgroundColor: "#ffe6e6"
            }}>
                <h2>⚠️ Oops! Something went wrong</h2>
                <p>We couldn’t load this section. Please try again later.</p>
            </div>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;
import { HelmetProvider, Helmet } from "react-helmet-async";

const Error = () => {
    return (
        <div>
         <HelmetProvider>
        <Helmet>
          <title>Snack-a-Log | Error</title>
        </Helmet>
      </HelmetProvider>
        <h2>Page Not Found </h2>
        <br></br>
            <img className="error" src="https://i.gifer.com/origin/99/998dc7eda49fa601533034f89f745ca5_w200.gif" alt="Snack on outta here!" />
       
        </div>
    )
}

export default Error;

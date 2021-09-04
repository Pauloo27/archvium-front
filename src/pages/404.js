import React from "react";
import "../styles/Page404.css";

export default function Page404() {
  return (
    <main id="container-404">
      <h1 id="title">The thing you are looking for was not found...</h1>
      <img alt="A cat hidden in a stack of paper and 404: Not found text" src="https://http.cat/404" id="img" />
      <div id="text-container">
        <h3>Murphy&quot;s laws:</h3>
        If anything can go wrong, it will.
        <br />
        If there is a possibility of several things going wrong,
        the one that will cause the most damage will be the one to go wrong.
        <br />
        If anything just cannot go wrong, it will anyway.
        <br />
        If everything seems to be going well, you have obviously overlooked something.
        <br />
        Left to themselves, things tend to go from bad to worse.
        <br />
        Smile... tomorrow will be worse.
        <br />
        Everything takes longer than you think.
        <br />
        Everything takes longer than it takes.
        <br />
        Every solution breeds new problems.
        <br />
        No matter how long or how hard you shop for an item,
        after you&quot;ve bought it, it will be on sale somewhere cheaper.
        <br />
        Everyone has a scheme for getting rich that will not work.
        <br />
        There&quot;s never time to do it right, but there&quot;s always time to do it over.
        <br />
        Murphy&quot;s golden rule: whoever has the gold makes the rules.
      </div>
    </main>
  );
}

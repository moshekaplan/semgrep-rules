const url = 'https://www.example.com';

// ok: react-http-leak
const okTest1 = <object codebase={url}></object>;

// ok: react-http-leak
const okTest2 = <button formaction={"https://www.example.com"}>Click me</button>;

// ok: react-http-leak
const okTest3 = <img srcset={url} />;

// ok: react-http-leak
const okTest4 = <applet archive="https://www.example.com">Hello world</applet>;

// ok: react-http-leak
const okTest5 = <object classid={url}>Hello world</object>;

function test(attackersUrl) {
// ruleid: react-http-leak
  const test1 = (<object width={100} height={100} codebase={attackersUrl}></object>);

// ruleid: react-http-leak
  const test2 = <blockquote cite={attackersUrl}>123</blockquote>;

  const test3 = (
// ruleid: react-http-leak
    <body background={attackersUrl}>
      <div></div>
    </body>
  );

// ruleid: react-http-leak
    const test4 = <embed src={attackersUrl} />;

    const test5 = (
// ruleid: react-http-leak
        <head profile={attackersUrl}>
            hello world
        </head>
    );

// ruleid: react-http-leak
    const test6 = <img usemap={attackersUrl}/>;

// ruleid: react-http-leak
    const test7 = <button formaction={attackersUrl}>Click me</button>;

// ruleid: react-http-leak
    const test8 = <img srcset={attackersUrl} />;

// ruleid: react-http-leak
    const test9 = <applet archive={attackersUrl}>Hello world</applet>;

// ruleid: react-http-leak
    const test10 = <object classid={attackersUrl}>Hello world</object>;
}

## Name:
API Example

## Description:
Example of new REST APIs built on top of VTEX IO.

Exposed routes:
```
"routes": {
    "posts": {
      "path": "/v1/posts",
      "public": true
    },
    "postById": {
      "path": "/v1/posts/:id",
      "public": true
    },
    "users": {
      "path": "/v1/users",
      "public": true
    }
}
```

## Proof points:
- External API calls
- Build new REST APIs

## How to demo:

1. Clone/Download this repository and open it with a code editor of your choice, eg. VSCode

2. Open the terminal and login to your VTEX account

```
vtex login {{account}}
```

3. Create a new development workspace or use an existing one

```
vtex use {{workspace}}
```

4. Add the account name as the vendor on `manifest.json` file

```
{
  "name": "api-example",
  "vendor": "{{account}}",
  "version": "0.0.1",
  "title": "API Example",
  "description": "Example of new REST APIs built on top of VTEX IO.",
  "mustUpdateAt": "2018-01-04",
  ...
  ...
}
```

5. Link the project

```
vtex link
```

6. After the linking, open Postman and make some API calls

```
GET
https://{{workspace}}--{{account}}.myvtex.com/v1/posts

GET
https://{{workspace}}--{{account}}.myvtex.com/v1/posts/1

GET
https://{{workspace}}--{{account}}.myvtex.com/v1/users
```

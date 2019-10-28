# School Management Client

User basic editing guide for school management system

## Installation

This client application is built on Next.js which is again built upon React

```bash
npm install
```

## Usage

1. To make any page => create a js file on the folder /pages
2. All forms are in ./forms
3. To edit the tables and edit the server JSON response with table column names => ./components/Columns.js
4. SET server address in ./endpoints/server.js

# Important

server JSON(row name) = Forms=>Putform(row name) = Forms=>Postform(row name)

```
Columns(accessor:'rollNum') = put_data:{rollNum: ''} = post_data:{rollNum: ''}
```



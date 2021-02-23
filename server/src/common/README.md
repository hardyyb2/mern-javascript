# Details

- **Directory Name** - common
- **Details** - common reusable code, mostly used with controllers
- **Files** :
  - _errorResponse_ - custom ErrorResponse class extending Error
    - **used in** - controllers/\*, middleware/errorHandler
  - _send_ - custom send function so as to not write res.send repeatedly
    - **used in** - controllers/\*

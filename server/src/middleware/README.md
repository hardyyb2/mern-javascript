# Details

- **Directory Name** - middlewares
- **Details** - contains middlewares
- **Files** :
  - _asyncHandler_ - wrapper around async functions, prevents writing try catch and passes error to next middleware (errorHandler in this case)
    - **used in** - controllers/\*
  - _errorHandler_ - a catch all errors handler
    - **used in** - server

// catch 404 and forward to error handler

exports.forwardError = (req, res, next) => {no
    next(createError(404));
  }


// // error handler
exports.errorHandler = (err, req, res, next) => {
     // set locals, only providing error in development
     res.locals.message = err.message;
     res.locals.error = req.app.get('env') === 'development' ? err : {};
   
     // render the error page
     res.status(err.status || 500);
     res.render('error');
}


//error handler 
// exports.errorHandler = (err, req, res, next) => {
//     const statusCode = res.status || 500
//     const message = err.message || "Server error occured"

//     res.status(statusCode).json({
//         status: "Failed",
//         message : message,
//         stack : process.env.NODE_ENV === 'production' ? null : err.stack
//     })
// }
  
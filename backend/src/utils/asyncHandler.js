import express from "express";

const asycHandler = (requestHandler) => {
  (err, req, res, next) => {
    Promise.resolve(
      requestHandler(req, res, next).catch((error) => next(error))
    );
  };
};

export { asycHandler }
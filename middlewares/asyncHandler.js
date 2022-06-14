module.exports.asyncHandler = async (
  req,
  res,
  statusCodes = [200, 400],
  func,
  errFunc
) => {
  try {
    const result = await func(req, res);
    
    return res.status(statusCodes[0]).send(result);
  } catch (err) {
    await errFunc();
    res.status(statusCodes[1]).send(err);
  }
}
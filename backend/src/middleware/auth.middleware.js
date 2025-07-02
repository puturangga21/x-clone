export const protectRoute = async (req, res, next) => {
  if (!req.auth().isAunthenticated) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

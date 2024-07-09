const logger = (req, res, next) => {
    const start = Date.now();
    const { method, url } = req;
    const timestamp = new Date().toISOString();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${timestamp}] ${method} ${url} - ${duration}ms`);
    });

    next();
};

module.exports = logger;
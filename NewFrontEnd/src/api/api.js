import axios from 'axios';

// const localServer = "http://localhost:5000";
// const deploymentServer = "postgresgrp12.ck89hy6mxnuv.us-east-1.rds.amazonaws.com";

const instance =  axios.create ({
    baseURL: "http://localhost:3001",
});

export default instance;
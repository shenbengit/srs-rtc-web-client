import * as fs from 'fs';
import yaml from "yaml"
// const fs = window.require("fs");
const YAML = require('yaml');
const dd = require('/static/config/config.yml')
//读取参数配置文件
const configFile = fs.readFileSync('/static/config/config.yml', 'utf8');
const parseConfig = yaml.parse(configFile);
console.log("config.yml:", parseConfig);

export  { parseConfig }

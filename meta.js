module.exports = {  
  prompts: [{
        name: 'name',
        message: '项目的名称',
        default: 'MINI APP'
    }, {
        name: 'version',
        message: '项目的版本号',
        default: '1.0.0'
    }, {
        name: 'description',
        message: '项目的简介',
        default: `A project for MINA`
    }, {
        name: 'author',
        message: '作者',
        default: `ezr`
    }
  ]
}
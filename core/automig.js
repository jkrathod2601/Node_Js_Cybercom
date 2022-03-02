const { exec } = require('child_process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let migration_file_path=framework.path.join(__dirname,"../migrations")

let migrationfile_array=framework.fs.readdirSync(migration_file_path)
console.log(migrationfile_array)

exec('npx sequelize db:migrate:status',(err,data)=>{
    console.log(framework.chalk.yellow(data))
    console.log("are you ready to migrate this all down file")
    readline.question(`yes/no ?`, name => {
        if(name=="yes"){
            exec("npx sequelize-cli db:migrate", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
              });
        }else{
            console.log("continue development")
        }
    })
})
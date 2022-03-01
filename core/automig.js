let migration_file_path=framework.path.join(__dirname,"../migrations")

let migrationfile_array=framework.fs.readdirSync(migration_file_path)
console.log(migrationfile_array)
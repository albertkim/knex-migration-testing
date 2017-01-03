# Justifications

Knex documentation is here: http://knexjs.org/

I had experience with Flyway's database migration system, but what I discovered is that it didn't pay as nicely as I wanted it to with my Node applications.

Firstly, I wanted to load environment variables through the `dotenv` package. There was no good way to pre-load the environment variables into a Flyway process.

But more so than that, the bigger issue was that Flyway introduced a new dependencies into the deployment of a running machine: Java and the Flyway process. Ideally, a machine would purely work with a Node/NPM dependency, and maybe a GitHub one.

# What did I learn?

Knex's migrations appear to fulfill all my requirements from a sql-based database migration system. The one obvious feature that's lost out on is the hash-based integrity checking system of Flyway, which checks that a previous migration file has not been changed since it last ran. Personally, this is not a big issue for me.

Flyway does not support downgrade scripts. Here is their reasoning on why:

```
A migration can fail at any point. If you have 10 statements, it is possible for the 1st, the 5th, the 7th or the 10th to fail. There is simply no way to know in advance. Downgrade scripts are written to roll back an entire migration. This renders them effectively useless, even for non-destructive changes.
```

However, I feel that the purpose of downgrade scripts are more for development purposes. If I'm in the process of writing database migrations, and I'd like to be rolling forwards and rolling backwards (they see me rolling?), I'd like my database migration system to support that. Granted, there are still cases where I make a change to the up script before I rollback, but there are still benefits to the system.

All the documentation and exampes on Knex migrations use timestamps for versions, but I have found that simple incrementing version numbers to be much more understandable than a big chunk of numbers representing a datetime.

To use dotenv, the dotenv package needs to be loaded and configured right into `knexfile.js` so that the environment variables load.

If you want to use your existing raw sql files, there is an example of doing so in the `migrations/4_runRawSqlFile.js` file. Note that doing so required modifying the Knex configuration to handle `multipleStatements`. According to https://github.com/tgriesser/knex/issues/257 the risk for SQL injection attacks are greatly increased, so a point of improvement for this repository could be to have a separatet `knexfile.js` for migrations that extends the original knex configuration.

# Conclusion

In summary, I find Knex's migration CLI to be better than Flyway for a Node-based application.

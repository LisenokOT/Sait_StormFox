from flask.cli import FlaskGroup
from smm import app


cli = FlaskGroup(app)

if __name__ == "__main__":
    cli()
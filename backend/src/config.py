from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    CMC_API_KEY: str
    BASE_URL: str

    model_config = SettingsConfigDict(env_file = ".env")


settings = Settings()
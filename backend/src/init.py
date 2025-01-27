from src.http_client import CMCHTTPClient
from src.config import settings


cmc_client = CMCHTTPClient(
    base_url = settings.BASE_URL,
    api_key = settings.CMC_API_KEY,
)
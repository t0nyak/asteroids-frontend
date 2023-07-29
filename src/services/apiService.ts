class ApiService {
  static apiUrl: string = "http://localhost:3123/asteroids?";

  static getAsteroids = async (startDate: string, endDate: string) => {
    const response = await fetch(
      ApiService.apiUrl + new URLSearchParams({ startDate, endDate })
    );

    return response.json();
  };
}

export default ApiService;

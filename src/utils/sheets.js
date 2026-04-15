import Papa from 'papaparse';

/**
 * FunciÃ³n para obtener los shows desde un Google Sheet publicado como CSV.
 * @param {string} csvUrl - La URL del CSV publicado desde Google Sheets.
 * @returns {Promise<Array>} - Una promesa que resuelve a un array de objetos de show.
 */
export const fetchShowsFromSheets = async (csvUrl) => {
    try {
        const response = await fetch(csvUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const csvData = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};

import Papa from 'papaparse';

/**
 * FunciÃ³n para obtener los shows desde un Google Sheet publicado como CSV.
 * @param {string} csvUrl - La URL del CSV publicado desde Google Sheets.
 * @returns {Promise<Array>} - Una promesa que resuelve a un array de objetos de show.
 */
export const fetchShowsFromSheets = async (csvUrl) => {
    try {
        console.log('Fetching shows from URL:', csvUrl);
        const response = await fetch(csvUrl);
        console.log('Fetch Response Status:', response.status);

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const csvData = await response.text();
        console.log('Raw CSV Data (first 100 bytes):', csvData.substring(0, 100));

        return new Promise((resolve, reject) => {
            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    console.log('PapaParse complete. Rows found:', results.data.length);
                    console.log('First row sample:', results.data[0]);
                    resolve(results.data);
                },
                error: (error) => {
                    console.error('PapaParse error:', error);
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Detailed fetchShowsFromSheets error:', error);
        throw error;
    }
};

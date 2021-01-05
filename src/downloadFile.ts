/**
 * Yes, this is a little hacky + I could just do it w/a link on the page. However this solution allows:
 * - error handling if the request fails.
 * - naming the file; and I can add a date for versioning.
 * - semantic HTML, which dictates that a link takes the user somewhere and a button does a thing.
 *    Yes, I can style the link to look like a button, but that would still be a problem for
 *       screenreaders and still violates semantic HTML.
 */
export const downloadFile = (data: string, page: number) => {
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = `users-page${page}-${new Date().toISOString()}.csv`;
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
};

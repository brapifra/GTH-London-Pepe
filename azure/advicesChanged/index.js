module.exports = async function (context, documents) {
    const updates = documents.map(advice => ({
        target: 'updated',
        arguments: [advice]
    }));

    context.bindings.signalRMessages = updates;
    context.done();
}

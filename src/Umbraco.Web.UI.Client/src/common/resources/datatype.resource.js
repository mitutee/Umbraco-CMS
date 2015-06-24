/**
    * @ngdoc service
    * @name umbraco.resources.dataTypeResource
    * @description Loads in data for data types
    **/
function dataTypeResource($q, $http, umbDataFormatter, umbRequestHelper) {
    
    return {
        
        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#getPreValues
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Retrieves available prevalues for a given data type + editor
         *
         * ##usage
         * <pre>
         * dataTypeResource.getPrevalyes("Umbraco.MediaPicker", 1234)
         *    .then(function(prevalues) {
         *        alert('its gone!');
         *    });
         * </pre> 
         *  
         * @param {String} editorAlias string alias of editor type to retrive prevalues configuration for
         * @param {Int} id id of datatype to retrieve prevalues for        
         * @returns {Promise} resourcePromise object.
         *
         */  
        getPreValues: function (editorAlias, dataTypeId) {

            if (!dataTypeId) {
                dataTypeId = -1;
            }

            return umbRequestHelper.resourcePromise(
               $http.get(
                   umbRequestHelper.getApiUrl(
                       "dataTypeApiBaseUrl",
                       "GetPreValues",
                       [{ editorAlias: editorAlias }, { dataTypeId: dataTypeId }])),
               'Failed to retrieve pre values for editor alias ' + editorAlias);
        },

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#getById
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Gets a data type item with a given id
         *
         * ##usage
         * <pre>
         * dataTypeResource.getById(1234)
         *    .then(function(datatype) {
         *        alert('its here!');
         *    });
         * </pre> 
         * 
         * @param {Int} id id of data type to retrieve        
         * @returns {Promise} resourcePromise object.
         *
         */
        getById: function (id) {
            
            return umbRequestHelper.resourcePromise(
               $http.get(
                   umbRequestHelper.getApiUrl(
                       "dataTypeApiBaseUrl",
                       "GetById",
                       [{ id: id }])),
               'Failed to retrieve data for data type id ' + id);
        },

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#getByName
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Gets a data type item with a given name
         *
         * ##usage
         * <pre>
         * dataTypeResource.getByName("upload")
         *    .then(function(datatype) {
         *        alert('its here!');
         *    });
         * </pre> 
         * 
         * @param {String} name Name of data type to retrieve        
         * @returns {Promise} resourcePromise object.
         *
         */
        getByName: function (name) {

            return umbRequestHelper.resourcePromise(
               $http.get(
                   umbRequestHelper.getApiUrl(
                       "dataTypeApiBaseUrl",
                       "GetByName",
                       [{ name: name }])),
               'Failed to retrieve data for data type with name: ' + name);
        },

        getAll: function () {
            
            return umbRequestHelper.resourcePromise(
               $http.get(
                   umbRequestHelper.getApiUrl(
                       "dataTypeApiBaseUrl",
                       "GetAll")),
               'Failed to retrieve data');
        },

        getAllUserConfigured: function () {

            return umbRequestHelper.resourcePromise(
                $http.get(
                    umbRequestHelper.getApiUrl(
                        "dataTypeApiBaseUrl",
                        "GetAllUserConfigured")),
                'Failed to retrieve data');
        },

        getAllUserPropertyEditors: function () {

            return umbRequestHelper.resourcePromise(
                $http.get(
                    umbRequestHelper.getApiUrl(
                        "dataTypeApiBaseUrl",
                        "GetAllUserPropertyEditors")),
                'Failed to retrieve data');
        },

        getAllTypesAndEditors : function(){
            return umbRequestHelper.resourcePromise(
                $http.get(
                    umbRequestHelper.getApiUrl(
                        "dataTypeApiBaseUrl",
                        "GetAllDataTypesAndEditors")),
                'Failed to retrieve data');
        },
        
        getAllPropertyEditors: function () {

            return umbRequestHelper.resourcePromise(
                $http.get(
                    umbRequestHelper.getApiUrl(
                        "dataTypeApiBaseUrl",
                        "GetAllPropertyEditors")),
                'Failed to retrieve data');
        },

        /**
         * @ngdoc method
         * @name umbraco.resources.contentResource#getScaffold
         * @methodOf umbraco.resources.contentResource
         *
         * @description
         * Returns a scaffold of an empty data type item
         * 
         * The scaffold is used to build editors for data types that has not yet been populated with data.
         * 
         * ##usage
         * <pre>
         * dataTypeResource.getScaffold()
         *    .then(function(scaffold) {
         *        var myType = scaffold;
         *        myType.name = "My new data type"; 
         *
         *        dataTypeResource.save(myType, myType.preValues, true)
         *            .then(function(type){
         *                alert("Retrieved, updated and saved again");
         *            });
         *    });
         * </pre> 
         * 
         * @returns {Promise} resourcePromise object containing the data type scaffold.
         *
         */
        getScaffold: function () {
            
            return umbRequestHelper.resourcePromise(
               $http.get(
                   umbRequestHelper.getApiUrl(
                       "dataTypeApiBaseUrl",
                       "GetEmpty")),
               'Failed to retrieve data for empty datatype');
        },
        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#deleteById
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Deletes a data type with a given id
         *
         * ##usage
         * <pre>
         * dataTypeResource.deleteById(1234)
         *    .then(function() {
         *        alert('its gone!');
         *    });
         * </pre> 
         * 
         * @param {Int} id id of content item to delete        
         * @returns {Promise} resourcePromise object.
         *
         */
        deleteById: function(id) {
            return umbRequestHelper.resourcePromise(
                $http.post(
                    umbRequestHelper.getApiUrl(
                        "dataTypeApiBaseUrl",
                        "DeleteById",
                        [{ id: id }])),
                'Failed to delete item ' + id);
        },
        
        

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#getCustomListView
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Returns a custom listview, given a content types alias
         * 
         * 
         * ##usage
         * <pre>
         * dataTypeResource.getCustomListView("home")
         *    .then(function(listview) {
         *    });
         * </pre> 
         * 
         * @returns {Promise} resourcePromise object containing the listview datatype.
         *
         */

         getCustomListView: function (contentTypeAlias) {      
                return umbRequestHelper.resourcePromise(
                   $http.get(
                       umbRequestHelper.getApiUrl(
                           "dataTypeApiBaseUrl",
                           "GetCustomListView",
                           { contentTypeAlias: contentTypeAlias }
                           )),
                   'Failed to retrieve data for custom listview datatype');
         },

        /**
        * @ngdoc method
        * @name umbraco.resources.dataTypeResource#createCustomListView
        * @methodOf umbraco.resources.dataTypeResource
        *
        * @description
        * Creates and returns a custom listview, given a content types alias
        * 
        * ##usage
        * <pre>
        * dataTypeResource.createCustomListView("home")
        *    .then(function(listview) {
        *    });
        * </pre> 
        * 
        * @returns {Promise} resourcePromise object containing the listview datatype.
        *
        */
         createCustomListView: function (contentTypeAlias) {
             return umbRequestHelper.resourcePromise(
                $http.post(
                    umbRequestHelper.getApiUrl(
                        "dataTypeApiBaseUrl",
                        "PostCreateCustomListView",
                        { contentTypeAlias: contentTypeAlias }
                        )),
                'Failed to create a custom listview datatype');
         },

        /**
         * @ngdoc method
         * @name umbraco.resources.dataTypeResource#save
         * @methodOf umbraco.resources.dataTypeResource
         *
         * @description
         * Saves or update a data type       
         * 
         * @param {Object} dataType data type object to create/update
         * @param {Array} preValues collection of prevalues on the datatype
         * @param {Bool} isNew set to true if type should be create instead of updated  
         * @returns {Promise} resourcePromise object.
         *
         */
        save: function (dataType, preValues, isNew) {
            
            var saveModel = umbDataFormatter.formatDataTypePostData(dataType, preValues, "save" + (isNew ? "New" : ""));

            return umbRequestHelper.resourcePromise(
                 $http.post(umbRequestHelper.getApiUrl("dataTypeApiBaseUrl", "PostSave"), saveModel),
                'Failed to save data for data type id ' + dataType.id);
        }
    };
}

angular.module('umbraco.resources').factory('dataTypeResource', dataTypeResource);

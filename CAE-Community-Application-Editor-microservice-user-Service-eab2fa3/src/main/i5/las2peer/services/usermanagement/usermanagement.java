package i5.las2peer.services.usermanagement;

import java.net.HttpURLConnection;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;

import com.fasterxml.jackson.core.JsonProcessingException;

import i5.las2peer.api.Service;
import i5.las2peer.restMapper.HttpResponse;
import i5.las2peer.restMapper.MediaType;
import i5.las2peer.restMapper.RESTMapper;
import i5.las2peer.restMapper.annotations.ContentParam;
import i5.las2peer.restMapper.annotations.Version;
import i5.las2peer.services.usermanagement.database.DatabaseManager;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Contact;
import io.swagger.annotations.Info;
import io.swagger.annotations.License;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.jaxrs.Reader;
import io.swagger.models.Swagger;
import io.swagger.util.Json;
import net.minidev.json.JSONObject;
import net.minidev.json.JSONValue;


/**
 * 
 * user Service
 * 
 * This microservice was generated by the CAE (Community Application Editor). If you edit it, please
 * make sure to keep the general structure of the file and only add the body of the methods provided
 * in this main file. Private methods are also allowed, but any "deeper" functionality should be
 * outsourced to (imported) classes.
 * 
 */
@Path("user")
@Version("0.1") // this annotation is used by the XML mapper
@Api
@SwaggerDefinition(
    info = @Info(title = "user Service", version = "0.1",
        description = "A LAS2peer microservice generated by the CAE.",
        termsOfService = "none",
        contact = @Contact(name = "michael", email = "CAEAddress@gmail.com") ,
        license = @License(name = "BSD",
            url = "https://github.com/CAE-Community-Application-Editor/microservice-user-Service/blob/master/LICENSE.txt") ) )
public class usermanagement extends Service {


  /*
   * Database configuration
   */
  private String jdbcDriverClassName;
  private String jdbcLogin;
  private String jdbcPass;
  private String jdbcUrl;
  private String jdbcSchema;
  private DatabaseManager dbm;


  public usermanagement() {
    // read and set properties values
    setFieldValues();
    // instantiate a database manager to handle database connection pooling and credentials
    dbm = new DatabaseManager(jdbcDriverClassName, jdbcLogin, jdbcPass, jdbcUrl, jdbcSchema);
  }

  // //////////////////////////////////////////////////////////////////////////////////////
  // Service methods.
  // //////////////////////////////////////////////////////////////////////////////////////


  /**
   * 
   * createUser
   * 
   * @param user a JSONObject
   * 
   * @return HttpResponse
   * 
   */
  @POST
  @Path("/")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_CREATED, message = "userResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_CONFLICT, message = "userConflictResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse")
  })
  @ApiOperation(value = "createUser", notes = "")
  public HttpResponse createUser(@ContentParam String user) {
    JSONObject user_JSON = (JSONObject) JSONValue.parse(user);
    // userResponse
    boolean userResponse_condition = true;
    if(userResponse_condition) {
      JSONObject user = new JSONObject();
      HttpResponse userResponse = new HttpResponse(user.toJSONString(), HttpURLConnection.HTTP_CREATED);
      return userResponse;
    }
    // userConflictResponse
    boolean userConflictResponse_condition = true;
    if(userConflictResponse_condition) {
      String userConflict = "Some String";
      HttpResponse userConflictResponse = new HttpResponse(userConflict, HttpURLConnection.HTTP_CONFLICT);
      return userConflictResponse;
    }
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    return null;
  }


  /**
   * 
   * getUserByID
   * 
   * @param id a String
   * 
   * @return HttpResponse
   * 
   */
  @GET
  @Path("/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "userResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFoundResponse")
  })
  @ApiOperation(value = "getUserByID", notes = "")
  public HttpResponse getUserByID(@PathParam("id") String id) {
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    // userResponse
    boolean userResponse_condition = true;
    if(userResponse_condition) {
      JSONObject user = new JSONObject();
      HttpResponse userResponse = new HttpResponse(user.toJSONString(), HttpURLConnection.HTTP_OK);
      return userResponse;
    }
    // notFoundResponse
    boolean notFoundResponse_condition = true;
    if(notFoundResponse_condition) {
      String notFound = "Some String";
      HttpResponse notFoundResponse = new HttpResponse(notFound, HttpURLConnection.HTTP_NOT_FOUND);
      return notFoundResponse;
    }
    return null;
  }


  /**
   * 
   * getCurrentUser
   * 
   * 
   * @return HttpResponse
   * 
   */
  @GET
  @Path("/me")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "nofFoundResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "userResponse")
  })
  @ApiOperation(value = "getCurrentUser", notes = "")
  public HttpResponse getCurrentUser() {
    // nofFoundResponse
    boolean nofFoundResponse_condition = true;
    if(nofFoundResponse_condition) {
      String notFound = "Some String";
      HttpResponse nofFoundResponse = new HttpResponse(notFound, HttpURLConnection.HTTP_NOT_FOUND);
      return nofFoundResponse;
    }
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    // userResponse
    boolean userResponse_condition = true;
    if(userResponse_condition) {
      JSONObject user = new JSONObject();
      HttpResponse userResponse = new HttpResponse(user.toJSONString(), HttpURLConnection.HTTP_OK);
      return userResponse;
    }
    return null;
  }


  /**
   * 
   * updateUser
   * 
   * @param id a String
   * @param user a JSONObject
   * 
   * @return HttpResponse
   * 
   */
  @PUT
  @Path("/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "userResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_CONFLICT, message = "userConflictRequest"),
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFoundResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_UNAUTHORIZED, message = "unauthorizedResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse")
  })
  @ApiOperation(value = "updateUser", notes = "")
  public HttpResponse updateUser(@PathParam("id") String id, @ContentParam String user) {
    JSONObject user_JSON = (JSONObject) JSONValue.parse(user);
    // userResponse
    boolean userResponse_condition = true;
    if(userResponse_condition) {
      JSONObject user = new JSONObject();
      HttpResponse userResponse = new HttpResponse(user.toJSONString(), HttpURLConnection.HTTP_OK);
      return userResponse;
    }
    // userConflictRequest
    boolean userConflictRequest_condition = true;
    if(userConflictRequest_condition) {
      String userConflict = "Some String";
      HttpResponse userConflictRequest = new HttpResponse(userConflict, HttpURLConnection.HTTP_CONFLICT);
      return userConflictRequest;
    }
    // notFoundResponse
    boolean notFoundResponse_condition = true;
    if(notFoundResponse_condition) {
      String notFound = "Some String";
      HttpResponse notFoundResponse = new HttpResponse(notFound, HttpURLConnection.HTTP_NOT_FOUND);
      return notFoundResponse;
    }
    // unauthorizedResponse
    boolean unauthorizedResponse_condition = true;
    if(unauthorizedResponse_condition) {
      String unauthorized = "Some String";
      HttpResponse unauthorizedResponse = new HttpResponse(unauthorized, HttpURLConnection.HTTP_UNAUTHORIZED);
      return unauthorizedResponse;
    }
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    return null;
  }


  /**
   * 
   * userList
   * 
   * 
   * @return HttpResponse
   * 
   */
  @GET
  @Path("/")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFoundResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "userResponse")
  })
  @ApiOperation(value = "userList", notes = "")
  public HttpResponse userList() {
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    // notFoundResponse
    boolean notFoundResponse_condition = true;
    if(notFoundResponse_condition) {
      String notfound = "Some String";
      HttpResponse notFoundResponse = new HttpResponse(notfound, HttpURLConnection.HTTP_NOT_FOUND);
      return notFoundResponse;
    }
    // userResponse
    boolean userResponse_condition = true;
    if(userResponse_condition) {
      JSONObject userList = new JSONObject();
      HttpResponse userResponse = new HttpResponse(userList.toJSONString(), HttpURLConnection.HTTP_OK);
      return userResponse;
    }
    return null;
  }


  /**
   * 
   * deleteUser
   * 
   * @param id a String
   * 
   * @return HttpResponse
   * 
   */
  @DELETE
  @Path("/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "userResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFound")
  })
  @ApiOperation(value = "deleteUser", notes = "")
  public HttpResponse deleteUser(@PathParam("id") String id) {
    // userResponse
    boolean userResponse_condition = true;
    if(userResponse_condition) {
      JSONObject user = new JSONObject();
      HttpResponse userResponse = new HttpResponse(user.toJSONString(), HttpURLConnection.HTTP_OK);
      return userResponse;
    }
    // notFound
    boolean notFound_condition = true;
    if(notFound_condition) {
      String notFound = "Some String";
      HttpResponse notFound = new HttpResponse(notFound, HttpURLConnection.HTTP_NOT_FOUND);
      return notFound;
    }
    return null;
  }


  // //////////////////////////////////////////////////////////////////////////////////////
  // Methods required by the LAS2peer framework.
  // //////////////////////////////////////////////////////////////////////////////////////

  
  /**
   * 
   * This method is needed for every RESTful application in LAS2peer. Please don't change.
   * 
   * @return the mapping
   * 
   */
  public String getRESTMapping() {
    String result = "";
    try {
      result = RESTMapper.getMethodsAsXML(this.getClass());
    } catch (Exception e) {
      e.printStackTrace();
    }
    return result;
  }


  /**
   * 
   * Returns the API documentation of all annotated resources for purposes of Swagger documentation.
   * 
   * @return The resource's documentation
   * 
   */
  @GET
  @Path("/swagger.json")
  @Produces(MediaType.APPLICATION_JSON)
  public HttpResponse getSwaggerJSON() {
    Swagger swagger = new Reader(new Swagger()).read(this.getClass());
    if (swagger == null) {
      return new HttpResponse("Swagger API declaration not available!",
          HttpURLConnection.HTTP_NOT_FOUND);
    }
    try {
      return new HttpResponse(Json.mapper().writeValueAsString(swagger), HttpURLConnection.HTTP_OK);
    } catch (JsonProcessingException e) {
      e.printStackTrace();
      return new HttpResponse(e.getMessage(), HttpURLConnection.HTTP_INTERNAL_ERROR);
    }
  }

}
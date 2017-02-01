package i5.las2peer.services.profilResource;

import java.io.Serializable;
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
 * UGNM1516G2 backend profil
 * 
 * This microservice was generated by the CAE (Community Application Editor). If you edit it, please
 * make sure to keep the general structure of the file and only add the body of the methods provided
 * in this main file. Private methods are also allowed, but any "deeper" functionality should be
 * outsourced to (imported) classes.
 * 
 */
@Path("profil")
@Version("0.1") // this annotation is used by the XML mapper
@Api
@SwaggerDefinition(
    info = @Info(title = "UGNM1516G2 backend profil", version = "0.1",
        description = "A LAS2peer microservice generated by the CAE.",
        termsOfService = "none",
        contact = @Contact(name = "sebastian vaassen", email = "CAEAddress@gmail.com") ,
        license = @License(name = "BSD",
            url = "https://github.com/CAE-Community-Application-Editor/microservice-UGNM1516G2-backend-profil/blob/master/LICENSE.txt") ) )
public class profilResource extends Service {


  public profilResource() {
    // read and set properties values
    setFieldValues();
  }

  // //////////////////////////////////////////////////////////////////////////////////////
  // Service methods.
  // //////////////////////////////////////////////////////////////////////////////////////


  /**
   * 
   * getAllAchievedByApp
   * 
   * @param id a String
   * @param appid a String
   * 
   * @return HttpResponse
   * 
   */
  @GET
  @Path("/{id}/apps/{appid}/achieved")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "okResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFoundResponse")
  })
  @ApiOperation(value = "getAllAchievedByApp", notes = "")
  public HttpResponse getAllAchievedByApp(@PathParam("id") String id, @PathParam("appid") String appid) {
    Serializable id = null;
    Serializable appid = null;
    try {
      Object list = this.invokeServiceMethod(
          "achievementResource", "getWins",
          id, appid);
    } catch (Exception e) {
        e.printStackTrace();
    }
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    // okResponse
    boolean okResponse_condition = true;
    if(okResponse_condition) {
      JSONObject achievedList = new JSONObject();
      HttpResponse okResponse = new HttpResponse(achievedList.toJSONString(), HttpURLConnection.HTTP_OK);
      return okResponse;
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
   * getAllUsedApps
   * 
   * @param id a String
   * 
   * @return HttpResponse
   * 
   */
  @GET
  @Path("/{id}/apps")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFoundResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "okResponse")
  })
  @ApiOperation(value = "getAllUsedApps", notes = "")
  public HttpResponse getAllUsedApps(@PathParam("id") String id) {
    Serializable id = null;
    try {
      Object list = this.invokeServiceMethod(
          "appResource", "getAllApps",
          id);
    } catch (Exception e) {
        e.printStackTrace();
    }
    // notFoundResponse
    boolean notFoundResponse_condition = true;
    if(notFoundResponse_condition) {
      String notFound = "Some String";
      HttpResponse notFoundResponse = new HttpResponse(notFound, HttpURLConnection.HTTP_NOT_FOUND);
      return notFoundResponse;
    }
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    // okResponse
    boolean okResponse_condition = true;
    if(okResponse_condition) {
      JSONObject appList = new JSONObject();
      HttpResponse okResponse = new HttpResponse(appList.toJSONString(), HttpURLConnection.HTTP_OK);
      return okResponse;
    }
    return null;
  }


  /**
   * 
   * getUserData
   * 
   * @param id a String
   * 
   * @return HttpResponse
   * 
   */
  @GET
  @Path("/{id}/user")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.TEXT_PLAIN)
  @ApiResponses(value = {
       @ApiResponse(code = HttpURLConnection.HTTP_INTERNAL_ERROR, message = "intErrorResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_OK, message = "okResponse"),
       @ApiResponse(code = HttpURLConnection.HTTP_NOT_FOUND, message = "notFoundResponse")
  })
  @ApiOperation(value = "getUserData", notes = "")
  public HttpResponse getUserData(@PathParam("id") String id) {
    Serializable id = null;
    try {
      Object userData = this.invokeServiceMethod(
          "userResource", "getUserByID",
          id);
    } catch (Exception e) {
        e.printStackTrace();
    }
    // intErrorResponse
    boolean intErrorResponse_condition = true;
    if(intErrorResponse_condition) {
      String intError = "Some String";
      HttpResponse intErrorResponse = new HttpResponse(intError, HttpURLConnection.HTTP_INTERNAL_ERROR);
      return intErrorResponse;
    }
    // okResponse
    boolean okResponse_condition = true;
    if(okResponse_condition) {
      JSONObject userData = new JSONObject();
      HttpResponse okResponse = new HttpResponse(userData.toJSONString(), HttpURLConnection.HTTP_OK);
      return okResponse;
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